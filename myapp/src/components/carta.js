import React from 'react';
import './cart';
import Card from './cart'


function Carta(props) {
    return (
        <div className='Carta'>
            
        <Card
            title='Tarta de Coco'
            imgUrl='https://clarin.com/img//2022/10/27/DVTVV0mtrr_340x340__1.jpg'
            descripcion='Enmantecar y enharinar un molde 26 cm. Y precalentar el horno a fuego mínimo,Mezclar la manteca con el azúcar,
            Agregar el huevo,Incorporar de apoco la harina hasta formar una masa,
            Estirar la masa sobre el molde (la masa tiene una textura muy suave y blanda). Cubrir la base del molde y realizar un borde,
            Colocar el dulce de leche,Mezclar en un bols el coco, junto con el azúcar y los huevos. E incorporarlos sobre el dulce de leche,(Pisar bien el coco sobre la preparacion, y una vez bien distribuido, rastrillar con la punta del tenedor apenas la superficie)
            Llevar a horno moderado 40 min'
            icons={[
            'https://cdn-icons-png.flaticon.com/128/992/992804.png',
            'https://cdn-icons-png.flaticon.com/128/5900/5900722.png',
            'https://cdn-icons-png.flaticon.com/128/4391/4391777.png',
            'https://cdn-icons-png.flaticon.com/128/2789/2789871.png',
            'https://cdn-icons-png.flaticon.com/128/442/442406.png']}
            cantingr={[]}
        />
        <Card
            title='Tarta de Oreo'
            imgUrl='https://img-global.cpcdn.com/recipes/41a66b42cc494c6f/1360x964cq70/tarta-oreo-foto-principal.webp'
            descripcion='Poner la harina, polvo de hornear, azúcar y mezclar, Luego la manteca hacer un arenado, el huevo formar una masa.
            Mandar al heladera con film
            Preparar la mezcla del relleno de las galletas con la crema y batir, triturar las galletas y ponerle a la mezcla reservar.
            Forrar el molde este es de 20 cm de diámetro, y mandar al horno por 20 minutos a 180° ponerle papel aluminio con algo de peso
            Dejar enfriar y armar, dulce de leche, crema y algunas galleta y decorar.'
            icons={['https://cdn-icons-png.flaticon.com/128/992/992804.png',
            'https://cdn-icons-png.flaticon.com/128/5900/5900722.png',
            'https://cdn-icons-png.flaticon.com/128/4391/4391777.png',
            'https://cdn-icons-png.flaticon.com/128/2789/2789871.png',
            'https://cdn-icons-png.flaticon.com/128/442/442406.png',
            'https://cdn-icons-png.flaticon.com/128/293/293686.png'
            ]}
            cantingr={[]}
        />
        <Card
            title='Tarta Cabsha'
            imgUrl='https://media.todojujuy.com/p/e9ead2bbe682f220fbda5863158298e9/adjuntos/227/imagenes/001/117/0001117353/1200x675/smart/cabshajpg.jpg'
            descripcion='Para la masa se colocan en un bowl la harina, el azúcar y la manteca a temperatura ambiente y se trabaja con la punta de los dedos hasta obtener una 
            especie de arenado o masa grumosa. Añadimos el huevo y se recomienda trabajar con una cuchara de madera (sin amasar, queremos que la masa quede crujiente) hasta formar un bollo.
            Estirar la masa en una tartera enmantecada y enharinada, luego llevar al freezer por 15 minutos aproximadamente. Hornear en horno medio por quince minutos o hasta que la masa esté crujiente, 
            no tiene que estar muy dorada.Una vez que la masa esté lista, rellenar con el dulce de leche (mezclado con el rhum o el coñac, opcional) y cubrir con chocolate cobertura derretido formando una capa de un centímetro aproximadamente de grosor. 
            Dejar en la heladera dos horas para que tome consistencia y servir bien fría. '
            icons={[
                'https://cdn-icons-png.flaticon.com/128/992/992804.png',
                'https://cdn-icons-png.flaticon.com/128/5900/5900722.png',
                'https://cdn-icons-png.flaticon.com/128/4391/4391777.png',
                'https://cdn-icons-png.flaticon.com/128/2789/2789871.png',
                'https://cdn-icons-png.flaticon.com/128/442/442406.png',
                'https://cdn-icons-png.flaticon.com/128/80/80673.png',
            ]}
            cantingr={[]}
        />
                <Card
            title='Tarta de salsa tofee, maní y crema'
            imgUrl='https://img-global.cpcdn.com/recipes/17885004b36f322d/1360x964cq70/tarta-de-salsa-tofee-mani-y-crema-foto-principal.webp'
            descripcion='Procesá las galletitas hasta convertirla en polvo y mézclalas con la manteca derretida.
            Colocá la preparación como base de un molde desmontable (aplástala bien para que quede consistente).En una ollita o sartén de teflón volcá el azúcar y prepará un caramelo.
            Agregá 250 ml de crema de leche y revolvé durante 5 minutos hasta que quede una salsa cremosa.
            Agregá la mantequilla de maní y reservá hasta enfriar. Agregá los maníes Batí el resto de la crema de leche (podés sumarle una cucharada de azúcar), agregá la vainilla y la ralladura.
            Para la preparación volcá la salsa tofee sobre la base de galletitas. Y arriba agregá la crema batida.
            Refrigerá 3 horas y disfrutá de este riquísimo postre '
            icons={[
                'https://cdn-icons-png.flaticon.com/128/992/992804.png',
                'https://cdn-icons-png.flaticon.com/128/5900/5900722.png',
                'https://cdn-icons-png.flaticon.com/128/4391/4391777.png',
                'https://cdn-icons-png.flaticon.com/128/9102/9102795.png',
                'https://cdn-icons-png.flaticon.com/128/442/442406.png',
                'https://cdn-icons-png.flaticon.com/128/2224/2224254.png',
            ]}
            cantingr={[]}
        />
        </div>
    );
}

export default Carta;