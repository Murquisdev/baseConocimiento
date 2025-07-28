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
