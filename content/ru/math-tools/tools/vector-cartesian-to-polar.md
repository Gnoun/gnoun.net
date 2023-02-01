---
id: vector_cartesian_to_polar
name: Конвертер Декартовой формы в Полярную
graph: 3bpeokqlk2
readMore: http://mathprofi.ru/poljarnye_koordinaty.html
seeAlso: 
- vector_polar_to_cartesian
- complex_rectangular_to_polar
---

Чтобы превратить Декартовые координаты в [полярные](https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D1%80%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82), нам надо отдельно вычитать радиус *r* и угол *θ*. Радиус – это длина вектора, поэтому мы просто применяем формулу [длины вектора](magnitude), чтобы его получить. Чтобы получить *θ*, мы ищём такого угола, для которого тангенс равен *y* разделен на *x*.

*Примечание: Вы тоже можете это использовать как конвертер точек.*