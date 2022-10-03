Feature: Busqueda Ebay

  Background: 
    Given que el usuario ingresa a la página de Ebay
  Scenario Outline: Como usuario, busca articulos en Ebay
    
    When busca por la barra de búsqueda el artículo <articulo>
    And hace click en la lupa
    Then comprueba el resultado de la búsqueda

    Examples:
      | articulo |
      | pilas    |

