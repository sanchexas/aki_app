import { AreaDto } from "../dtos/AreaDto";
import { AreaHolder } from "../models/AreaHolder";
import { Industry } from "../models/Industry";


class AreaService{
    async getAll(areas:AreaHolder[]):Promise<AreaDto[]>{
        let dtos:AreaDto[] = [];
        for(let area of areas)
        {
            const indust:Industry = area.indust;
            console.log(area)
            const dto:AreaDto = new AreaDto(area,indust);
            dtos.push(dto);
        }
        return dtos;
    }
}
export default AreaService