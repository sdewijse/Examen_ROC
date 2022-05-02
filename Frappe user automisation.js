frappe.ui.form.on("User",{
	refresh: function(frm) {
		// Dit wordt in een variabele opgeslagen voor later gebruik.
		var email_extension = "@nextatwork.nl";
		var allowed_symbols = /^[a-zA-Z\-]*$/;
		var character_set = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789[]{}()@#$%^&!?"
		
		// In dit stukje code wordt via JavaScript de waardes van email en username ingevuld gebaseerd op de
		// voornaam, tussenvoegsel en achternaam ingevuld door de gebruiker, hierna moet op de knop
		// "Generate email and username" gedrukt worden. Een if-else wordt toegepast om rekening te houden met 
		// mensen die geen tussenvoegsel hebben. Spaties worden verwijderd voor mensen met twee tussenvoegsels of een tweedelige naam.
		frm.add_custom_button(__('Generate Email and Username'), () =>{
		    var first_name = frm.doc.first_name.toLowerCase();
		    var middle_name = (frm.doc.middle_name || '').toLowerCase().replace(/\s/g, '');
		    var last_name = (frm.doc.last_name).toLowerCase().replace(/\s/g, '');
		    if(last_name === ""){
		        alert("Last Name is not allowed to be empty!");
		    }
		    else{
		        if(first_name.match(allowed_symbols) && middle_name.match(allowed_symbols) && last_name.match(allowed_symbols)){
    	            frm.set_value("email", first_name+"."+middle_name+last_name+email_extension)
    	            frm.set_value("username", first_name+"."+middle_name+last_name);
		        }
		        else {
		            alert("Only letters are allowed!");
    		    }
		    }
		});
		

		// Hieronder wordt een knop aangemaakt die een tijdelijk wachtwoord kan genereren. Door de character set
		// te randomizen en er acht tekens uit te pakken kan men een willekeurig wachtwoord opstellen voor tijdelijk gebruik.
		// Het wachtwoord wordt als password in het veld gezet en als plaintext in de console om deze aan de gebruiker
		// door te kunnen geven. 
		frm.add_custom_button(__('Generate random password'), () =>{
		    var length = 8,
            passWord = "";
        for (var i = 0, n = character_set.length; i < length; ++i) {
            passWord += character_set.charAt(Math.floor(Math.random() * n));
        }
        frm.set_value("new_password", passWord);
        console.log(passWord);
		});
		
		// Om vervolgens de velden "Email" en "Username" grijs te maken zodat deze alleen door de knop
		// aangepast kunnen worden moet men op de puntjes rechtsboven, naast "opslaan" klikken, het doctype
		// aanpassen en dan de velden voor "Email" en "Username" van "Data" naar "Read-only" veranderen.
	}
});
