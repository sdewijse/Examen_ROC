frappe.ui.form.on('Item', {
	refresh: function(frm) {
	    frm.add_custom_button(__('Generate Barcode'), () =>{
		    frm.set_value("own_barcode", frappe.datetime.get_today(), frm.get_field("id"));
		});
	    
		frm.add_custom_button(__('Generate QR Code'), () =>{
		    console.log(frm);
		    $("#qr_code").html(`<img src="https://barcode.tec-it.com/barcode.ashx?data=${frm.get_field("own_barcode").get_input_value()}&code=QRCode">`);
		    $("#qr_text").html(frm.get_field("own_barcode").get_input_value());
		});
	}
});


// Om deze code te kunnen gebruiken moet met eerst twee lege divs aanmaken in de Options van het item doctype.
// Om dit te doen moet "Customize" aangeklikt worden op de pagina van het doctype, hierna moet in Options twee
// divs gemaakt worden met id's "qr_text" en "qr_code". Hierna wordt een online barcode generator aangeroepen
// om de plain text van het tekstveld om te zetten tot een qr code.