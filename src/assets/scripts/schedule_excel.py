from openpyxl import load_workbook
from openpyxl import Workbook

file_dest = '/assets/appointments.xlsx'

wb = load_workbook(filename = file_dest)
ws1 = wb.active
ws1.title = 'Sheet 1'

# put stuff here
ws1['A1'] = "Test"

wb.save(filename = file_dest)
