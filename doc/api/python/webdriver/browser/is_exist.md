# is_exist
***def is_exist(
        self,
        locator: Union[_Locator, str],
        locator_variables: dict = {},
        timeout: int = 30
    ) -> bool***  

 Check whether the UI element exists in current open browser

>**Remarks:**  
Use the following method, `clicknium.chrome.open("https://bing.com").is_exist()`, it is different with the method `clicknium.is_exist()` [clicknium.is_exist](./doc/api/python/is_exist.md) when locating the UI element.
>- `clicknium.is_exist()` is for  UiElement of both web and desktop, and does not specify a scope to locate the element.
>- `clicknium.chrome.open("https://bing.com").is_exist()` will locate element in the specified browser.


**Parameters:**  
    &emsp;**locator[Required]**: str | _Locator   
        &emsp;&emsp; locator string, the name of one locator in locator store, eg: 'locator.chrome.bing.search_sb_form_q', locator store is chrome, and locator name is search_sb_form_q  
    &emsp;**locator_variables**: dict  
        &emsp;&emsp; locator variables, set to initialize parameters in locator, ex: var_dict = { "row": 1,  "column": 1}, more about variables, please refer to [parametric locator](./doc/automation/parametric_locator.md)  
    &emsp;**timeout**: int  
        &emsp;&emsp; timeout for the operation, the unit is second, and the default value is 30 seconds. 

**Returns:**  
    &emsp;return True if UI element exists, otherwise return False

**Example:**
***
```python
    from clicknium import clicknium as cc, locator, ui

    browser = cc.chrome.open("https://bing.com")

    # check element if exist
    browser.is_exist(locator.chrome.bing.search_sb_form_q)

    # parametric locator
    variables = {"name":"test"}
    browser.is_exist(locator.chrome.bing.search_sb_form_q, variables)
```