<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Exams extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('ExamModel');
    }

    public function getQuestions()
    {
        $results = $this->ExamModel->getQuestions();
        //print_r($results);

        echo json_encode($results);
    }

    public function submitAnswers(){
      
    }

    public function verifyLogin()
    {
        $results = $this->UserModel->verifyLogin();
        $arr = array("ajax"=>0);

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
