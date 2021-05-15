from selenium import webdriver

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://login.salesforce.com/?locale=in")
driver.maximize_window()
driver.find_element_by_css_selector("#username").send_keys("Disha")
driver.find_element_by_css_selector(".password").send_keys("Thakur")
driver.find_element_by_css_selector(".password").clear()
driver.find_element_by_link_text("Forgot Your Password?").click()
driver.find_element_by_xpath("//a[@href='/?locale=in']").click()
print(driver.find_element_by_xpath("//form[@name='login']/div[1]/label").text)


