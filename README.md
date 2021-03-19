# Shop GraphQL API

## Playground

https://graphic-tide-305412.ew.r.appspot.com/graphql

## Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Category](#category)
    * [CompatibleGroup](#compatiblegroup)
    * [Order](#order)
    * [OrderItem](#orderitem)
    * [Product](#product)
  * [Inputs](#inputs)
    * [CreateCategoryInput](#createcategoryinput)
    * [CreateCompatibleGroupInput](#createcompatiblegroupinput)
    * [CreateOrderInput](#createorderinput)
    * [CreateProductInput](#createproductinput)
    * [GetCategoriesInput](#getcategoriesinput)
    * [GetProductsInput](#getproductsinput)
    * [OrderItemInput](#orderiteminput)
    * [UpdateCategoryInput](#updatecategoryinput)
    * [UpdateCompatibleGroupInput](#updatecompatiblegroupinput)
    * [UpdateProductInput](#updateproductinput)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [DateTime](#datetime)
    * [Float](#float)
    * [Int](#int)
    * [String](#string)
    * [Void](#void)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>getCategories</strong></td>
<td valign="top">[<a href="#category">Category</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#getcategoriesinput">GetCategoriesInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getCategoryById</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categoryId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getCompatibleGroupById</strong></td>
<td valign="top"><a href="#compatiblegroup">CompatibleGroup</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">compatibleGroupId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getCompatibleGroups</strong></td>
<td valign="top">[<a href="#compatiblegroup">CompatibleGroup</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productId</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getOrderById</strong></td>
<td valign="top"><a href="#order">Order</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getOrders</strong></td>
<td valign="top">[<a href="#order">Order</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getProductById</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getProducts</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#getproductsinput">GetProductsInput</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createCategory</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#createcategoryinput">CreateCategoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createCompatibleGroup</strong></td>
<td valign="top"><a href="#compatiblegroup">CompatibleGroup</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#createcompatiblegroupinput">CreateCompatibleGroupInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createOrder</strong></td>
<td valign="top"><a href="#order">Order</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#createorderinput">CreateOrderInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createProduct</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#createproductinput">CreateProductInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCategory</strong></td>
<td valign="top"><a href="#void">Void</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categoryId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteCompatibleGroup</strong></td>
<td valign="top"><a href="#void">Void</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">compatibleGroupId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteOrder</strong></td>
<td valign="top"><a href="#void">Void</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteProduct</strong></td>
<td valign="top"><a href="#void">Void</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">productId</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateCategory</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#updatecategoryinput">UpdateCategoryInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateProduct</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#updateproductinput">UpdateProductInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### Category

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentCategoryId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subcategories</strong></td>
<td valign="top">[<a href="#category">Category</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CompatibleGroup

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>products</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productsIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Order

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>items</strong></td>
<td valign="top">[<a href="#orderitem">OrderItem</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>product</strong></td>
<td valign="top"><a href="#product">Product</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### OrderItem

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Product

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>categories</strong></td>
<td valign="top">[<a href="#category">Category</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>categoriesIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>compatibleGroups</strong></td>
<td valign="top">[<a href="#compatiblegroup">CompatibleGroup</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>compatibleProducts</strong></td>
<td valign="top">[<a href="#product">Product</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>photo</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### CreateCategoryInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentCategoryId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### CreateCompatibleGroupInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productsIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateOrderInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>items</strong></td>
<td valign="top">[<a href="#orderiteminput">OrderItemInput</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateProductInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>categoriesIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>photo</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### GetCategoriesInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>parentCategoryId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### GetProductsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>categoriesIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>compatibleProductsIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxPrice</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minPrice</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>query</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### OrderItemInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateCategoryInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>parentCategoryId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateCompatibleGroupInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>productsIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateProductInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>categoriesIds</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>photo</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTime

The javascript `Date` as string. Type represents date and time as the ISO Date string.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Void

Represents NULL values

