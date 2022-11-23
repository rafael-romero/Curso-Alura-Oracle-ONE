
public class CrearCuenta {
	public static void main(String[] args) {
		//variable           = valor
		Cuenta primeraCuenta = new Cuenta();
		primeraCuenta.saldo = 400;
		//primeraCuenta.pais = "peru"; NO compila
		System.out.println(primeraCuenta.saldo);
		
		Cuenta segundaCuenta = new Cuenta();
		segundaCuenta.saldo = 400;
	
		System.out.println(segundaCuenta.saldo);
		//System.out.println(primeraCuenta.agencia);
		
		System.out.println(primeraCuenta);
		System.out.println(segundaCuenta);
		
		if(primeraCuenta == segundaCuenta) {
			System.out.println("son el mismo objeto");
		} else {
			System.out.println("son diferentes");
		} 
	}
}
