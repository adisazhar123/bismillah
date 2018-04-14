<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Participants extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	 public function __construct()
{
		parent::__construct();
		$GLOBALS['a'] = "a";

}

	public function index()
	{
		$this->load->view('template/header');
		$this->load->view('peserta/home');
		$this->load->view('template/footer');

	}

	public function loadPetunjuk(){
		$this->load->view('peserta/petunjuk');
	}

	public function loadWelcomePeserta(){
		$this->load->view('peserta/welcome_peserta');
	}

	public function loadUjianPeserta(){
		//if ($GLOBALS['a']==="a")
			//need session checker to check if logged in or not, baru bisa load ujian
			// add a private property or use session
			$this->load->view('peserta/ujian');
	}
	public function login(){
		$this->load->view('peserta/login');
	}

	public function register(){
		$this->load->view('peserta/register');

	}

}
