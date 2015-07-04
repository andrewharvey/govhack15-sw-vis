all:
	mkdir -p www/data
	psql -f src/schema.sql
	psql -f src/lga_consumtion_pp.sql
	rm -rf www/data/sw_consumption_pp.geojson
	ogr2ogr -f GeoJSON www/data/sw_consumption_pp.geojson PG: lga_consumption_pp
	rm -rf www/data/sw_consumption_pp.topo.json
	~/node_modules/topojson/bin/topojson --quantization 80000 --simplify-proportion 0.5 --id-property code -o www/data/sw_consumption_pp.topo.json --properties -- www/data/sw_consumption_pp.geojson

