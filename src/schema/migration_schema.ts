import { getManager } from "typeorm";
import { create_schema } from "./create_schema";

export async function migration_schema() {
    create_schema("schema_example")
    const schemaList: {schema_name: string}[] = await getManager().query('select schema_name from information_schema.schemata;');
  
    for (let i = 0; i < schemaList.length; i++) {
      const schemaName = schemaList[i].schema_name
      if(schemaName.startsWith("Schema")){
        create_schema(schemaName)
      }
    }
}