from selenium import webdriver
import time


driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/dropdownsPractise/")
driver.maximize_window()
Title=driver.find_elements_by_xpath("//div[@class='cart']/a")
for item in Title:
    if item.text == "Flight Booking":
        item.click()
        break
time.sleep(8)
driver.find_element_by_id("autosuggest").send_keys("ind")
time.sleep(2)
countries=driver.find_elements_by_css_selector("li[class='ui-menu-item'] a")
print(len(countries))
for country in countries:
    if country.text == "India":
        country.click()
        break
assert "India" in driver.find_element_by_id("autosuggest").get_attribute('value')




'''
driver.get("https://rahulshettyacademy.com/#/index")
driver.maximize_window()
time.sleep(2)
count=driver.find_elements_by_xpath("//ul[@class='navigation clearfix']/li/a")
for item in count:
    if item.text == "Practice Projects":
        item.click()
        break

Title=driver.find_element_by_xpath("//div[@class='form-column col-md-6 col-sm-8 col-xs-12']/h2")
if Title.text == "Join now to Practice":
    driver.find_element_by_id("name").send_keys("Disha")
    time.sleep(2)
    driver.find_element_by_id("email").send_keys("thakurdy@rkknec.edu")
    time.sleep(2)
    driver.find_element_by_xpath("//button[@class='theme-btn btn-style-one']").click()
    time.sleep(2)
    AutoLink = driver.find_elements_by_xpath("//div[@class='projects-item']/p/a")
    for items in AutoLink:
        if items.text == "Automation Practise - 1":
            items.click()
            break
else:
    AutoLink=driver.find_elements_by_xpath("//div[@class='projects-item']/p/a")
    for items in AutoLink:
        if items.text == "Automation Practise - 1":
            items.click()
            break
Title_NextPage=driver.find_element_by_class_name("container")
assert  "Flight Booking" in Title_NextPage.text
'''