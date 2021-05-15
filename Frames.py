


# iframe, frameset, frames these are the tagnames for frames and if want to acces any elemnet inside any of these tag names
# following is the code


from selenium import webdriver
import time

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://the-internet.herokuapp.com/iframe")
driver.maximize_window()
# see the frame tag has sone id frame name or index value
# below statement will helf to get any of these values mentioned above
driver.switch_to.frame("mce_0_ifr")
driver.find_element_by_css_selector("#tinymce").clear()
driver.find_element_by_css_selector("#tinymce").send_keys("Automated this module")
# after the work is done with frames we need to swtich out from the frames and carry out normal html tag
driver.switch_to.default_content()
print(driver.find_element_by_tag_name("h3").text)
