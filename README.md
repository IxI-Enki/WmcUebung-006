###### <p align="center"> WmcUebung-006 </p>

# Uniform Resource Identifiers
> A ***URI***, or ***U***niform ***R***esource ***I***dentifier, is a unique character sequence that identifies a resource that is *(almost
always)* accessed via the internet.
<div align="center">
  
  <img src ="./img/uri.png" alt="URI" width=80%>

#### *URLs are only one kind of URI*

---

## URL
</div>


- ### URL Parts and Their Descriptions

<div align="center">
  
  <img src ="./img/url-parts.png" alt="URL-PARTS" width=80%>

| Part            | Required                         | Description                                                |  
| :--             | :-:                              | :-----                                                     |  
| Protocol/Scheme | Yes                              | Indicates the protocol to be used (e.g., http, https,ftp). |
| Username        | No                               | Optional user information for authentication.              |
| Password        | No                               | Optional password for authentication.                      |
| Domain          | Yes                              | Specifies the domain name or IP address of the server.     |
| Port            | No (*defaults* to `80` or `443`) | Specifies the port number.                                 |
| Path            | No (*defaults* to `/` )          | The path to the resource on the server.                    |
| Query           | No                               | Contains data to be sent to the server.                    |
| Fragment        | No                               | Points to a specific part of the resource                  |

</div>

---

- ### URL Paths
  On static sites (like blogs or documentation sites) a URL's path mirrors the server's filesystem hierarchy.  

  ##### For example: 
   > *if* the website [`https://exampleblog.com`](https://exampleblog.com) had a **static web server** running in its `/home` directory,  
   > then a **request** to [`https://exampleblog.com/site/index.html`](https://exampleblog.com/site/index.html) would *probably* **return** the **file** located **at `/home/site/index.html`**.  

  ***<p align="center"> But technically, this is just a convention.</p>***
  > *The server could be configured to return any file or data given that path.*  

  - Paths in ***URL***s are essentially just another *type of parameter that can be passed to the server when making a request*.  
  - For dynamic sites and web applications, the path is often used to denote a specific resource or endpoint.
 
  ---
  
  - #### Path conventions
  
    Many static websites (websites where the content does not change, as opposed to dynmaic web applications) use paths as a direct mapping to the path to the server's file system.   

    ##### For example: 
     > If I was running a static web server for "mystaticstate.com" from the root of my file system, a **GET request** to 
   [`http://mystaticstate.com/documents/hello.txt`](http://mystaticstate.com/documents/hello.txt) would *serve the file at* `/documents/hello.txt` from my server.  
 
    #### *<p align="center"> Most dynamic web applications don't use this simple mapping of URL path -> file path.</p>*

    > Technically, a URL path is just a string that the web server can do what it wants with, and modern websites take advantage of that flexibility.  

      - #### Some common examples of what paths are used for include:

        - The hierarchy of pages on a website, whether or not that reflects a server's file structure 
        - Parameters passed into an HTTP request, like the ID of a resource 
        - The version of the API
        - The type of resource being requested

---
 