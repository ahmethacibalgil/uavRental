/*
Name: 			Tables / Advanced - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	4.0.0
*/

(function($) {

	'use strict';

	var datatableInit = function() {

		$('#datatable-default').dataTable({
			info: true,
			responsive: true,
			language: {
				"emptyTable": "Tabloda herhangi bir veri mevcut değil",
				"info": "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
				"infoEmpty": "Kayıt yok",
				"infoFiltered": "(_MAX_ kayıt içerisinden bulunan)",
				"infoThousands": ".",
				"lengthMenu": "_MENU_",
				"loadingRecords": "Yükleniyor...",
				"processing": "İşleniyor...",
				"search": "",
				"zeroRecords": "Eşleşen kayıt bulunamadı",
				"paginate": {
					"first": "İlk",
					"last": "Son",
					"next": "<i class='fas fa-chevron-right'>",
					"previous": "<i class='fas fa-chevron-left'>"
				},
				"aria": {
					"sortAscending": ": artan sütun sıralamasını aktifleştir",
					"sortDescending": ": azalan sütun sıralamasını aktifleştir"
				},
				"select": {
					"rows": {
						"_": "%d kayıt seçildi",
						"1": "1 kayıt seçildi"
					},
					"cells": {
						"1": "1 hücre seçildi",
						"_": "%d hücre seçildi"
					},
					"columns": {
						"1": "1 sütun seçildi",
						"_": "%d sütun seçildi"
					}
				}
			},
			// dom: '<"row"<"col-lg-6"l><"col-lg-6"f>><"table-responsive"t>p'
		});

	};

	$(function() {
		datatableInit();
	});

}).apply(this, [jQuery]);