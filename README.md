# E-commerce Web Application - Moyozon

# Tasks

1. Install Tools
2. Creat React App
3. Create Git Repository
4. List products
   1. Create an array of the products
   2. Add images of the products
   3. Render products
   4. Add styling
5. Add routing
6. Create Nodejs server
   1. run npm init
   2. update package.json to set type: module
   3. add .js to imports
   4. install express
   5. create server.js
   6. add start command in server.js
   7. require express
   8. create route for backend
   9. move products.js to backend
   10. create route for api/products
   11. return products
7. Fetch products from backend
   1. set proxy in package.json
   2. install axios
   3. use state
   4. use effect
   5. use reducer
8. Add Bootstrap styling
   1. install react-bootstrap
   2. implement in app.js
9. Style Cards
10. Edit Loading Spinner
11. Set up product page
12. Error Message box
13. Implement the add to cart
    1. React context
    2. reducer
    3. store provider
    4. add to cart button handler
14. Complete Add To Cart
    1. check exist item in the cart
    2. check count in stock in backend
15. Create Cart Screen
    1. create 2 columns
    2. display items list .
    3. create action column
16. Complete Cart Screen
    1. click handler to increase or decrease item quantity
    2. click handler to remove item
    3. click handler to checkout
17. Sign in screen
18. Connect To MongoDB
    1. create atlas monogodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
19. Seed Sample Data
    1. create Product model
    2. create User model
    3. create seed route
    4. use route in server.js
    5. seed sample product
20. Seed Sample Users
    1. create user model
    2. seed sample users
    3. create user routes
21. Create Signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
22. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
23. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
24. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
25. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
26. Create Place Order Screen
    1. show cart items , payment and address
    2. handle place order action
    3. create order create api
27. Implement Place Order Action
    1. handle place order action
    2. create order create api
28. Create Order Screen
    1. create backend api for order / : id
    2. fetch order api in frontend
    3. show order information in 2 cloumns
29. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react - paypal - js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
30. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
31. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info
32. Publish To Heroku
    1. create and config node project
    2. serve build folder in frontend folder
    3. Create heroku account
    4. connect it to github
    5. Create mongodb atlas database .
    6. Set database connection in heroku env variables
    7. Commit and push
33. Add Sidebar and Search Box
    1. add sidebar
    2. add search box
34. Create Search Screen
    1. show filters
    2. create api for searching products
    3. display results
35. Create Admin Menu
    1. define protected route component
    2. define admin route component
    3. add menu for admin in header
36. Create Dashboard Screen
    1. Create Dashboard UI
    2. Implement backend API
    3. Connect UI to Backend
37. Manage Products
    1. Create products list UI
    2. Implement backend API
    3. Fetch data
38. Create Product
    1. Create products button
    2. Imp lement backend API
    3. Handle on click
39. Edit Product
    1. Create edit button
    2. Create edit product UI
    3. Dispaly product info in the input boxes
40. Implement Update Product
    1. Create edit product backend API
    2. Handle update click
41. Upload Product Image
    1. Create cloudinary account
    2. Use the api key in env file
    3. Handle upload file
    4. Implement backend API to upload
42. Delete Product
    1. Show delete button
    2. Implement backend API
    3. Handle on click
43. List Orders
    1. Create order list screen
    2. Implement backen API
    3. Fetch and display orders
44. Deliver Order
    1. Add deliver button
    2. Handle click action
    3. Implement backen API for deliver
45. Delete Order
    1. Add delete button
    2. Handle click action
    3. Implement backen API for delete
46. List Users
    1. Create user list screen
    2. Implement backen API
    3. Fetch and display users
47. Edit User
    1. Create edit button
    2. Create edit product UI
    3. Dispaly product info in the input boxes
    4. Implement backend API
    5. Handle edit click
48. Delete User
    1. Add delete button
    2. Handle click action
    3. Implement backend API for delete
49. Choose Address On Google Map
    1. create google map credentials
    2. update .env file with Google Api Key
    3. create api to send google api to frontend
    4. create map screen
    5. fetch google api
    6. getUserLocation
    7. install @react-google-maps/api
    8. use it in shipping screen
    9. apply map to the checkout screen
