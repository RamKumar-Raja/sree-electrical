@echo off
set src="C:\Users\Pavun\.gemini\antigravity\brain\8d90588d-affd-41b0-ac41-540a5420b455"
set dst="d:\my projects\electrical\sres-website\public"

copy /Y %src%\vcb_panels_1774969892127.png %dst%\vcb_panels.png
copy /Y %src%\db_boxes_1774969910991.png %dst%\db_boxes.png
copy /Y %src%\cable_trays_1774969932431.png %dst%\cable_trays.png
copy /Y %src%\busbar_processor_1774969957746.png %dst%\busbar_processor.png
copy /Y %src%\electrical_spares_1774969977130.png %dst%\electrical_spares.png
copy /Y %src%\substation_scada_1774969996953.png %dst%\substation_scada.png

echo "Copy completed!"
