(function(){
    $(document).on('contextmenu', function(ev){
        var target = $(ev.target);
        var table = target.parents('table');
        if(table.length>0){
            var table = $(table[0]);
            var labels = table.find('th');
            var values = table.find('tr');

            var res = {
                labels: [],
                values: []
            }
            labels.each(function(i, item){
                res.labels.push($(item).text())
            })
            values.each(function(i, item){
                var row = [];
                $(item).find('td').each(function(i, td){
                    row.push($(td).text().replace(/,/g, ''));
                })
                res.values.push(row);
            })
            chrome.runtime.sendMessage(chrome.runtime.id, res, function(response){

            })
        }
    })
})();
