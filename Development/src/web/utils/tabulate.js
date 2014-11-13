function tablulate(data, columns, heading, target) {
    var tableDiv = d3.select("body")
		.select(target).attr("class", "CSSTableGenerator");
		
		var table = tableDiv.append("table").attr("class", "table"),
        thead = table.append("thead"),
        tbody = table.append("tbody");

	var properties = columns.map(function(column) { return [column, data[column] ];});	
	
    // Append the header row
    thead.append("tr")
        .selectAll("t")
        .data([heading])
        .enter()
        .append("th").attr("colspan", "2")
        .html(function(d) { return d; });

    // Create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(properties)
        .enter()
        .append("tr");

    // Create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(d){ return d; })
        .enter()
        .append("td")
		.attr("class", function(d, i) { return (i == 0 ? "tag" : "value"); })
        .html(function(d) { return d; });
		
	$("table").fadeIn(1000);
	
    return tableDiv;
}
