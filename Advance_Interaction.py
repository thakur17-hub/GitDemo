from selenium import webdriver
import time

from selenium.webdriver import ActionChains

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/AutomationPractice/")
driver.maximize_window()
# below step is used for mouse interaction with selenium
action = ActionChains(driver)
action.move_to_element(driver.find_element_by_id("mousehover")).perform()  # only after giving perform mouse hower action will be performed
childMenu=driver.find_element_by_link_text("Reload")
action.move_to_element(childMenu).click().perform()

