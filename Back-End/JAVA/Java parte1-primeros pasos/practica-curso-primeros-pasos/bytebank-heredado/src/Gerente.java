//import javax.swing.plaf.synth.SynthOptionPaneUI;

public class Gerente extends Funcionario implements Autenticable{
	
	// Sobre-escritura de metodo
	public double getBonificacion() {
		System.out.println("Ejecutando desde gerente");
		return 2000;
	}

	@Override
	public void setClave(String clave) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean iniciarSesion(String clave) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
