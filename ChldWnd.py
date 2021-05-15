from selenium import webdriver
import time

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://the-internet.herokuapp.com/windows")
driver.maximize_window()

driver.find_element_by_link_text("Click Here").click()
ChildWindow=driver.window_handles[1]
#(parentid, chilid)
driver.switch_to.window(ChildWindow)    # child window Id
print(driver.find_element_by_tag_name("h3").text)
ParentWindow=driver.window_handles[0]
driver.switch_to.window(ParentWindow)
print(driver.find_element_by_tag_name("h3").text)