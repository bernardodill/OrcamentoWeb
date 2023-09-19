<?php
	require("plugin/fpdf186/fpdf.php");
	require('plugin/fpdf186/makefont/makefont.php');


	$arrayItens = $_POST["fld-item"];
	$arrayQuant = $_POST["fld-quantidade"];
	$arrayPreco = $_POST["fld-precoUnitario"];
	$arraySubTotal = $_POST["fld-subTotal"];

	$valorTotal = $_POST["valorTotal"];

	
	class PDF extends FPDF{

		
		


		function Header(){
			$this->Image('img/logo.png', 5, 5, 35);

		}
	


		function Footer(){
			$this->SetY(-15);
		    $this->SetFont('Arial','I',8);
		    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
		}

	}

	




	

	$pdf = new PDF();
	$pdf->AliasNbPages();
	$pdf->AddPage();
	
	$pdf->SetFont('Arial','',18);
	$pdf->Cell(150,18, "Orçamento", 0, 0, 'R');


	$pdf->SetFont('Arial','B',12);
	$pdf->SetMargins(20,20);
	$pdf->SetFillColor(200,200,200);
	$pdf->SetTextColor(46,59,110);

	$pdf->Ln(30);
	
	$pdf->Cell(80,7, "Item", 0, 0, 'L', true);
	$pdf->Cell(16,7, "Quant.", 0, 0, 'L', true);
	$pdf->Cell(30,7, "Preço Unit.", 0, 0, 'L', true);
	$pdf->Cell(40,7, "SubTotal", 0, 1, 'L', true);

	$pdf->SetFont('Arial','',10);
	$pdf->SetMargins(0,10);
	$pdf->SetTextColor(0,0,0);

	foreach($arrayItens as $data){
		$pdf->Cell(80,8, $data, 'B',2);
	}

	
	$pdf->SetXY(100,47);

	foreach($arrayQuant as $data){
		$pdf->Cell(16,8,$data,'B',2);
	}
	

	$pdf->SetXY(116,47);

	foreach($arrayPreco as $data){
		$pdf->Cell(30,8," R$ ".$data,'B',2);
	}


	$pdf->SetXY(145,47);
	foreach($arraySubTotal as $data){
		$pdf->Cell(40,8," R$ ".$data,'B',2);
	}
	$pdf->SetX(120);
	$pdf->SetFont('Arial','',18);
	$pdf->Cell(66,20, $valorTotal, 0, 1);




	$pdf->Output();


?>