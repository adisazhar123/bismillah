<?php
defined('BASEPATH') or exit('No direct script access allowed');

class UserModel extends CI_Model
{
  public function register($data){
    return $this->db->insert('team', $data);
  }

  public function verifyLogin(){
    $data=array(
      'email_address' => $this->input->post('email_address')
    );

    $this -> db -> select('team_id, password, team_name');
    $this -> db -> from('team');
    $this -> db -> where($data);
    $this -> db -> limit(1);

    $query = $this -> db -> get();

    if($query -> num_rows() > 0){
      return $query->result();
    }
    else return false;
  }
}
