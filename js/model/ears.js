class ears extends shape 
{
    constructor(id = 0)
    {
        let path = 'data/ear/';
        let options = 
        {
            0: 
            {
                'name': null 
            },
            1: 
            {
                'name': 'PointyEar' 
            },
            2: 
            {
                'name': 'Horn'  
            },
            3: 
            {
                'name': 'HairTuf' 
            },
            4: 
            {
                'name': 'Planta1' 
            },
            5: 
            {
                'name': 'Planta2' 
            },
        };
        super(id, path, options);
    }

}