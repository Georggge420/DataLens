# ejemplo:

const hashtagData = use(fetch(`/api/instagram/hashtag/${hashtag}`).then((res) => res.json()));

# resultados de la api hashtag:

{
"count": <number>, // El número total de medios asociados con el hashtag
"data": {
"id": <number>, // El ID del hashtag
"name": <string>, // El nombre del hashtag
"media_count": <number>, // El número total de medios asociados con el hashtag
"follow_status": <number>, // El estado de seguimiento del hashtag por el usuario actual
"following": <number>, // Si el usuario actual está siguiendo el hashtag
"allow_following": <number>, // Si se permite seguir el hashtag
"allow_muting_story": <boolean>, // Si se permite silenciar las historias del hashtag
"profile_pic_url": <string>, // La URL de la imagen de perfil del hashtag
"non_violating": <number>, // Si el hashtag no viola las políticas de Instagram
"related_tags": <null>, // Tags relacionados con el hashtag
"subtitle": <string>, // Subtítulo asociado con el hashtag
"social_context": <string>, // Contexto social del hashtag
"social_context_profile_links": <array>, // Enlaces de perfil asociados con el contexto social del hashtag
"social_context_facepile_users": <array>, // Usuarios asociados con el contexto social del hashtag
"follow_button_text": <null>, // Texto del botón de seguimiento
"show_follow_drop_down": <boolean>, // Si se debe mostrar el menú desplegable de seguimiento
"formatted_media_count": <string>, // El número total de medios asociados con el hashtag, formateado como una cadena
"challenge_id": <null>, // ID del desafío asociado con el hashtag
"destination_info": <null>, // Información de destino asociada con el hashtag
"description": <null>, // Descripción del hashtag
"debug_info": <null>, // Información de depuración
"fresh_topic_metadata": <null>, // Metadatos del tema fresco asociados con el hashtag
"promo_banner": <null>, // Banner promocional asociado con el hashtag
"top": {
"sections": <array> // Secciones de los mejores medios asociados con el hashtag
}
}
}

# resultados de la api keywords:

hashtag.id: El identificador único del hashtag. Este dato puede ser útil para rastrear el hashtag a lo largo del tiempo.

hashtag.media_count: El número de publicaciones que usan el hashtag. Este dato puede ser útil para medir la popularidad de un hashtag.

hashtag.name: El nombre del hashtag. Este dato puede ser útil para mostrar en un dashboard o tabla.

hashtag.profile_pic_url: La URL de la imagen de perfil asociada con el hashtag. Este dato puede ser útil para mostrar en un dashboard o tabla.

hashtag.search_result_subtitle: El subtítulo del resultado de búsqueda, que generalmente muestra el número de publicaciones en un formato legible. Este dato puede ser útil para mostrar en un dashboard o tabla.

hashtag.use_default_avatar: Indica si el hashtag está utilizando el avatar predeterminado. Este dato puede ser útil para entender las características del hashtag.

position: La posición del hashtag en los resultados de búsqueda. Este dato puede ser útil para entender la relevancia del hashtag en relación con la palabra clave "amazon".

---

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
const { keyword } = params;
const url = `https://instagram-data1.p.rapidapi.com/hashtag/search?keyword=${keyword}`;

const options = {
method: "GET",
headers: {
"X-RapidAPI-Key": "e757c21034msh7ad415748f3a9c7p136597jsn91c4629b5364",
"X-RapidAPI-Host": "instagram-data1.p.rapidapi.com",
},
};

try {
const response = await fetch(url, options);
const result = await response.json();
return NextResponse.json({ result });
} catch (error) {
console.error(error);
}
}
