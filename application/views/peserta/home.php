<div class="content">

</div>

<script type="text/javascript">
$(function(){
  $(".content").load("peserta/loadwelcomePeserta");

  function showPetunjuk(){
    $(document).on("click",".show-petunjuk",function(){
      $(".content").load("peserta/loadPetunjuk");
    });
  }

  function showTes(){
    $(document).on('click','.show-tes',function(){
      alert ("clicked on mulai mengerjakan tes");

    });
  }
  showTes();
  showPetunjuk();

});
</script>
