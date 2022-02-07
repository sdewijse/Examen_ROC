frappe.ui.form.on('Item', {
	refresh(frm) {
		// In dit stukje wordt op variabele current_date
		// de huidige datum automatisch ingevuld als het
		// formulier geladen is.
		var current_date = frappe.datetime.nowdate();
		frm.set_value("item_name", current_date);
	}
});


// Met deze code wordt er een scanner aangezet, met deze scanner kan de
// productcode onmiddelijk ingevuld worden.
new frappe.ui.Scanner({
    dialog: true,
    multiple: true,
    on_scan(data){
        handle_scanned_barcode(data.decodedText);
    }
});