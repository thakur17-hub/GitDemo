from selenium import webdriver
from selenium.webdriver.support.select import Select

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/angularpractice/")
driver.maximize_window()
#driver.find_element_by_name("name").send_keys("Disha")
driver.find_element_by_css_selector("input[name='name']").send_keys("Rahul")
driver.find_element_by_name("email").send_keys("Shetty")
driver.find_element_by_id("exampleCheck1").click()
dropdown=Select(driver.find_element_by_id("exampleFormControlSelect1"))
dropdown.select_by_index(1)
dropdown.select_by_visible_text("Male")
driver.find_element_by_xpath("//input[@type='submit']").click()
message=driver.find_element_by_class_name("alert-success").text
assert "succges" in message


