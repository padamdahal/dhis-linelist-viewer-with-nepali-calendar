$(document).ready(function(){
	/*
	Sample Event Visualization Call (HTML) - Single Stage (Events)
	https://sudurpashchim.hmis.gov.np/api/42/analytics/events/query/kvottqqHM1j.html+css?
	dimension=ou:USER_ORGUNIT
	&dimension=q3NpuWzGvso
	&dimension=yBYTz1M15tf
	&dimension=MqBkcXtzszn
	&dimension=RzyHxE71iyC
	&dimension=WPekgdeclbX
	&dimension=SbNxjxMkC0w
	&dimension=bqd9yievDDw.gSGUznPF0Pk
	&dimension=bqd9yievDDw.khLAuIZWcWz
	&dimension=bqd9yievDDw.BaULJOvGIWd
	&dimension=bqd9yievDDw.Ywk0nodmiOh
	&dimension=bqd9yievDDw.epAqgYgiHgZ
	&dimension=bqd9yievDDw.cDvtYGWN7V9
	&dimension=bqd9yievDDw.GBrGuZZVrrD
	&dimension=bqd9yievDDw.pzUhqWYhCKF
	&dimension=bqd9yievDDw.xcofI3Azrtc
	&dimension=bqd9yievDDw.xXLeRzcLQCw
	&displayProperty=SHORTNAME
	&outputType=EVENT
	&stage=bqd9yievDDw
	&tableLayout=true
	&columns=ou;eventDate;q3NpuWzGvso;yBYTz1M15tf;MqBkcXtzszn;RzyHxE71iyC;WPekgdeclbX;SbNxjxMkC0w;gSGUznPF0Pk;khLAuIZWcWz;BaULJOvGIWd;Ywk0nodmiOh;epAqgYgiHgZ;cDvtYGWN7V9;GBrGuZZVrrD;pzUhqWYhCKF;xcofI3Azrtc;xXLeRzcLQCw
	&headers=ouname,eventdate,q3NpuWzGvso,yBYTz1M15tf,MqBkcXtzszn,RzyHxE71iyC,WPekgdeclbX,SbNxjxMkC0w,bqd9yievDDw.gSGUznPF0Pk,bqd9yievDDw.khLAuIZWcWz,bqd9yievDDw.BaULJOvGIWd,bqd9yievDDw.Ywk0nodmiOh,bqd9yievDDw.epAqgYgiHgZ,bqd9yievDDw.cDvtYGWN7V9,bqd9yievDDw.GBrGuZZVrrD,bqd9yievDDw.pzUhqWYhCKF,bqd9yievDDw.xcofI3Azrtc,bqd9yievDDw.xXLeRzcLQCw
	&dataIdScheme=NAME
	&paging=false
	&asc=yBYTz1M15tf
	*/
	
	/*
	Multiple Stages (Enrollment)
	https://sudurpashchim.hmis.gov.np/api/42/analytics/enrollments/query/kvottqqHM1j.html+css?
	dimension=ou%3AUSER_ORGUNIT
	&dimension=q3NpuWzGvso
	&dimension=yBYTz1M15tf
	&dimension=MqBkcXtzszn
	&dimension=RzyHxE71iyC
	&dimension=SbNxjxMkC0w
	&dimension=WPekgdeclbX
	&dimension=fvTV0ZdtZUf.zuJPjWzRdYV
	&dimension=bqd9yievDDw.khLAuIZWcWz
	&dimension=bqd9yievDDw.gSGUznPF0Pk
	&dimension=bqd9yievDDw.epAqgYgiHgZ
	&dimension=bqd9yievDDw.cDvtYGWN7V9
	&dimension=bqd9yievDDw.GBrGuZZVrrD
	&dimension=bqd9yievDDw.Ywk0nodmiOh
	&dimension=bqd9yievDDw.pzUhqWYhCKF
	&dimension=bqd9yievDDw.xcofI3Azrtc
	&dimension=bqd9yievDDw.xXLeRzcLQCw
	&displayProperty=SHORTNAME
	&outputType=ENROLLMENT
	&tableLayout=true
	&columns=ou%3Bq3NpuWzGvso%3ByBYTz1M15tf%3BMqBkcXtzszn%3BRzyHxE71iyC%3BSbNxjxMkC0w%3BWPekgdeclbX%3BzuJPjWzRdYV%3BkhLAuIZWcWz%3BgSGUznPF0Pk%3BepAqgYgiHgZ%3BcDvtYGWN7V9%3BGBrGuZZVrrD%3BYwk0nodmiOh%3BpzUhqWYhCKF%3BxcofI3Azrtc%3BxXLeRzcLQCw
	&headers=ouname%2Cq3NpuWzGvso%2CyBYTz1M15tf%2CMqBkcXtzszn%2CRzyHxE71iyC%2CSbNxjxMkC0w%2CWPekgdeclbX%2CfvTV0ZdtZUf.zuJPjWzRdYV%2Cbqd9yievDDw.khLAuIZWcWz%2Cbqd9yievDDw.gSGUznPF0Pk%2Cbqd9yievDDw.epAqgYgiHgZ%2Cbqd9yievDDw.cDvtYGWN7V9%2Cbqd9yievDDw.GBrGuZZVrrD%2Cbqd9yievDDw.Ywk0nodmiOh%2Cbqd9yievDDw.pzUhqWYhCKF%2Cbqd9yievDDw.xcofI3Azrtc%2Cbqd9yievDDw.xXLeRzcLQCw
	&dataIdScheme=NAME
	&paging=false
	&asc=yBYTz1M15tf
	*/
	
	const baseUrl = "../../..";
	var isoStartDate, isoEndDate;
	
	// Load LINELIST Reports
	async function loadReports() {
			const url = `${baseUrl}/api/eventVisualizations?fields=id,name,type&filter=type:eq:LINE_LIST&paging=false`;
	
			const res = await fetch(url);
			const data = await res.json();
	
			const select = $("#reportSelect");
			select.empty();
	
			data.eventVisualizations.forEach(r => {
					select.append(`<option value="${r.id}">${r.name}</option>`);
			});
	}
	
	// Get selected eventViaualization by ID
	async function getVisualization(id) {
		const url = `${baseUrl}/api/eventVisualizations/${id}.json?id,name,attributeDimensions,dataElementDimensions,type,program,programStage,columnDimension,metadata&filter=type:eq:LINE_LIST&&paging=false`;
			const res = await fetch(url);
			return await res.json();
	}
	
	// Build API URL (IMPORTANT PART)
	function buildUrl(config, startDate, endDate) {
	
			const program = config.program.id;
			const stage = config.programStage.id;
	
			let url = `${baseUrl}/api/analytics/events/query/${program}.html?`;
	
			// OU
			url += "dimension=ou:USER_ORGUNIT&";
	
			// ATTRIBUTES
			let attrIds = config.attributeDimensions.map(a => a.attribute.id);
	
			attrIds.forEach(id => {
					url += `dimension=${id}&`;
			});
	
			// DATA ELEMENTS
			let deIds = config.dataElementDimensions.map(d => d.dataElement.id);
	
			config.dataElementDimensions.forEach(d => {
					url += `dimension=${d.programStage.id}.${d.dataElement.id}&`;
			});
	
			// DATE FILTER
			if (startDate && endDate) {
					url += `startDate=${startDate}&endDate=${endDate}&`;
			}
	
			// STAGE
			url += `stage=${stage}&`;
	
			// OUTPUT
			url += "displayProperty=SHORTNAME&outputType=EVENT&tableLayout=true&dataIdScheme=NAME&paging=false&";
	
			// =====================
			// COLUMNS
			// =====================
			let columns = [
					"ou",
					"eventDate",
					...attrIds,
					...deIds
			];
	
			url += `columns=${columns.join(";")}&`;
	
			// =====================
			// HEADERS
			// =====================
			let headers = [
					"ouname",
					"eventdate",
					...attrIds,
					...config.dataElementDimensions.map(d => `${d.programStage.id}.${d.dataElement.id}`)
			];
	
			url += `headers=${headers.join(",")}&`;
	
			// OPTIONAL SORT
			if (attrIds.length > 0) {
					url += `asc=${attrIds[0]}&`;
			}
	
			return url;
	}
	
	// Fetch Data
	async function fetchData(url) {
	
			$("#output").html('<div class="loading">Loading...</div>');
			const res = await fetch(url);
			return await res.text();
	}
	
	function enhanceTable() {
	
			const table = $("#output").find("table").first();
	
			if (!table.length) return;
	
			if ($.fn.DataTable.isDataTable(table)) {
					table.DataTable().destroy();
			}
	
			table.DataTable({
					paging: true,
					searching: true,
					ordering: true,
					pageLength: 25,
					lengthMenu: [10, 25, 50, 100],
	
					dom: 'Bfrtip', // IMPORTANT: enables buttons
	
					buttons: [
							{
									extend: 'excelHtml5',
									text: 'Export Excel',
									title: 'Line List Report',
									exportOptions: {
											columns: ':visible'
									}
							},
							{
									extend: 'print',
									text: 'Print',
									title: 'Line List Report',
									exportOptions: {
											columns: ':visible'
									}
							}
					]
			});
	}
	
	// Render Table
	function render(data) {
	
			if (!data.rows || data.rows.length === 0) {
					$("#output").html("No data");
			}
		//console.log(data);
	
		if (data){
			$("#output").html(data);
			setTimeout(() => {
							enhanceTable();
				convertTableDatesToBS();
					}, 100);
		}
	}
	
	function convertToBS(adDateStr) {
			try {
					if (!adDateStr) return adDateStr;
	
					const adDate = new Date(adDateStr);
					const bsDate = NepaliFunctions.AD2BS(adDate);
			//console.log(bsDate);
					return bsDate; //`${bsDate.year}-${String(bsDate.month).padStart(2,'0')}-${String(bsDate.day).padStart(2,'0')}`;
	
			} catch (e) {
					console.warn("Date conversion failed:", adDateStr);
					return adDateStr;
			}
	}
	
	function convertTableDatesToBS() {
	
			const table = $("#output").find("table").first();
			if (!table.length) return;
	
			// Find date columns by header
			let dateIndexes = [];
	
			table.find("thead th").each(function (index) {
					const text = $(this).text().toLowerCase();
	
					if (text.includes("date") || text.includes("मिति")) {
							dateIndexes.push(index);
					}
			});
	
			if (dateIndexes.length === 0) return;
	
			// Convert each cell
			table.find("tbody tr").each(function () {
	
					dateIndexes.forEach(i => {
	
							const cell = $(this).find("td").eq(i);
							const value = cell.text().trim();
				//console.log(value);
							const converted = convertToBS(value);
				//console.log(converted);
							cell.text(value.substring(0,10) + " | " + converted);
					});
			});
	}
	
	// INIT
	loadReports();
	
	$("#startDate").NepaliDatePicker({
		"onSelect":function(date){
					console.log("startDate:", date.value);
					isoStartDate = NepaliFunctions.BS2AD(date.value);
		}
	});

	$("#endDate").NepaliDatePicker({
			"onSelect":function(date){
					console.log("endDate:", date.value);
					isoEndDate = NepaliFunctions.BS2AD(date.value);
			}
	});

	// BUTTON CLICK
	$("#loadBtn").click(async () => {
			const id = $("#reportSelect").val();
			const config = await getVisualization(id);
			const url = buildUrl(config, isoStartDate, isoEndDate);
			const data = await fetchData(url);
			render(data);
	});
});