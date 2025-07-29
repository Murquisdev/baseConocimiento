# Conceptos básicos de SQL

## Lectura de datos

### SELECT (seleccionar)

Información a mostrar.

```sql
-- Los comentarios se ponen con "--"

SELECT * from movies
--Muesrta todos los datos de la tabla movies

SELECT name, year from movies
-- Muestra el nombre y el año de la tabla movies.
```

### DISTINCT (distinto)

Muestra los datos sin repetir de una tabla (los que son distintos)..

```sql
SELECT DISTINCT name FROM people
-- Muestra los nombres (aunque haya repetidos solo los muestra una vez) de la tabla people
```

### WHERE (donde)

Limita los datos a mostrar.

```sql
SELECT name, age FROM people WHERE age >= 18
-- Muestra los nombres y edad de los mayores o iguales a 18
```

### ORDER BY (ordenar por)

Ordena la lista a mostrar.

```sql
SELECT name, age FROM people ORDER BY age DESC
-- Por defecto ordena de modo ASC (ascendente), DESC (descendente)
```

### LIKE (como)

Contiene, se parece.

```sql
SELECT name FROM people WHERE email LIKE "%gmail.com"
-- Muestra todos los nombres que tiene un email de gmail.com
-- % indico que busque "algo" seguido por gmail
-- No distingue mayúsculas o minúsculas
```

### AND OR NOT

Y, O , NO

```sql
SELECT name FROM people WHERE NOT email LIKE "%gmail.com"
-- Muestra todos los nombres que NO tiene un email de gmail.com

SELECT name FROM people WHERE NOT email LIKE "%gmail.com" AND age >= 18
-- Muestra todos los nombres que NO tiene un email de gmail.com y son mayores o iguales a 18

SELECT name
FROM people
WHERE (email NOT LIKE '%gmail.com' AND email NOT LIKE '%outlook.com')
AND age >= 18;
-- Muestra todos los nombres que NO tiene un email de gmail.com o outlook.com y son mayores o iguales a 18
```

### LIMIT

Cuantas "filas" (resultados) muestro.

```sql
SELECT name FROM people WHERE NOT email LIKE "%gmail.com" LIMIT 10
-- Muestra los 10 primeros nombres que NO tiene un email de gmail.com
```

### NULL

Muestra los datos nulos (vacíos).

```sql
SELECT name FROM people WHERE email IS NULL;
-- Muestra los usuarios que no tienen email.

SELECT name FROM people WHERE email IS NOT NULL;
-- Muestra los usuarios que tienen email.
```

### MIN , MAX

Selecciona mínimos / máximos. (Se obtiene solo el campo a comparar)

```sql
SELECT MAX(age) FROM people,
-- Muestra la edad máxima.
```

### COUNT, SUM , AVG

Cuenta el número de filas que se obtendría, la suma o la media.

```sql
SELECT COUNT(age) FROM people,
-- Cuenta el número de usuarios que tienen edad.

SELECT SUM(age) FROM people,
-- Calcula la suma de las edades.

SELECT AVG(age) FROM people,
-- Calcula la media de las edades.
```

### IN

Filtra por diferentes valores (no es _"case sensitive"_)

```sql
SELECT * FROM people WHERE name IN ("Marcos", "Murquis")
-- Muestra las personas con nombre Marcos o Murquis.
```

### BETWEEN

Entre dos valores.

```sql
SELECT * FROM people WHERE age BETWEEN 20 AND 30
-- Muestra las personas entre 20 y 30 años.
```

### ALIAS (AS)

Crea alias de las columnas de los datos que se muestran.

```sql
SELECT name, age AS `edad` FROM people WHERE age BETWEEN 20 AND 30
-- Muestra en el título de la tabla la edad en lugar de age.
```

### CONCAT

Permite unir columnas

```sql
SELECT CONCAT(name, " " ,surname) FROM people
-- Muestra el nombre y el apellido separados por un espacio en blanco

SELECT CONCAT(name, " " ,surname) AS "Nombre y apellidos" FROM people
-- Muestra el nombre y el apellido separados por un con el título de la columna Nombre y apellidos.
```

### GROUP BY

Agrupa datos por categorías.

```sql
SELECT COUNT(age), age FROM users GROUP BY age
-- Agrupa los resultados por edad diferente y cuenta cuantos registros existen de cada una

SELECT COUNT(age), age FROM users WHERE age > 15 GROUP BY age ORDER BY age ASC
-- Agrupa los resultados por edad diferente mayor de 15, cuenta cuantos registros existen de cada una y los ordena
```

### HAVING

Filtra grupos ya formados.

```sql
SELECT COUNT(age) FROM users HAVING COUNT(age) > 3
-- Cuenta cuantas filas contienen un dato no nulo en el campo edad de la tabla "users" mayor que 3
```

### CASE

Lanza una lógica en lugar de una consulta simple. (Parecido a un if-else)

```sql
SELECT *,
CASE
	WHEN age > 18 THEN 'Es mayor de edad'
    WHEN age = 18 THEN 'Acaba de cumplir la mayoría de edad'
    ELSE 'Es menor de edad'
END AS '¿Es mayor de edad?'
FROM users;
-- Obtiene todos los datos de la tabla "users" y establece condiciones de visualización de cadenas de texto según el valor de la edad
```

### IFNULL

Que hacer si el dato es nulo.

```sql
SELECT name, surname, IFNULL(age, 0) AS age FROM users
-- Si hay edad con dato nulo, lo sustituye por 0
```
