<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Users extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('UserModel');
    }
    public function register()
    {
        $data=array(
          'email_address'=> $this->input->post('email_address'),
          'team_name' => $this->input->post('nama_tim'),
          'password' => password_hash($this->input->post('tim_password'), PASSWORD_BCRYPT)
    );

        if ($this->UserModel->register($data)) {
            $response['success']='1';
            echo json_encode($response);
        } else {
            $response['success']='0';
            echo json_encode($response);
        }
    }

    public function verifyLogin()
    {
        $results = $this->UserModel->verifyLogin();

        if ($results) {
            foreach ($results as $result) {
                # code...

                //echo $this->input->post('password');

                if (password_verify($this->input->post('tim_password'), $result->password)) {
                    $sess_array = array(
                      'nama_tim' => $result->team_name
            );
                    //$this->session->set_userdata('logged_in', $sess_array);
                    $arr = array("ajax"=>1);
                    echo json_encode($arr);
                } else {
                    $arr = array("ajax"=>0);
                    echo json_encode($arr);
                }
            }
        } else {
            echo "failed";
            $arr = array("ajax"=>"failed");
            echo json_encode($arr);
        }
    }
}
