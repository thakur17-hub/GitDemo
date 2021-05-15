from selenium import  webdriver

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://www.rahulshettyacademy.com/#/index")
driver.maximize_window()
title=driver.title
print(title)
print(driver.current_url)
driver.get("https://rahulshettyacademy.com/angularpractice/")
driver.back()
driver.refresh()
driver.close()