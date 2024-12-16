export interface Pokemon { 
    name: string;
    url: string;
    sprites: Sprites;
    base_experience: number;
    types: Type[];
    imageUrl:string
}
export interface Sprites {
     front_default: string; 
}
export interface Ability { 
    ability: { name: string;}
}
export interface Types { 
    type: Type[]
}
export interface Type{ 
    type: { name: string;}
}

