import os
from datetime import datetime

x = "acr_" + datetime.now().strftime("%Y-%m-%d_%H-%M")

os.system('ng build --prod --base-href="https://www.acrep.net"')
os.rename("dist\\acr", "dist\\" + x)
os.system('angular-cli-ghpages --dir=dist/' + x)
print()
input("Press any key to continue...")
