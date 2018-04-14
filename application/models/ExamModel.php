<?php
defined('BASEPATH') or exit('No direct script access allowed');

class ExamModel extends CI_Model
{

  public function getQuestions(){
    $this->db->select("question, opt_1, opt_2, opt_3, opt_4, opt_5");
    $this->db->from("question");
    $query = $this->db->get();

    if ($query->num_rows() > 0) return $query->result();
    else return false;

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

  public function submitAnswers(){
    
  }
}
