import {query} from '~~/server/utils/db';

// query builder
type Row = Record<string, unknown>;

const cols = (o: Row) => Object.keys(o);
const vals = (o: Row) => Object.values(o);
const where = (w: Row) => cols(w).map((k) => `${k}=?`).join(' AND ');

export const db = {
  select: <T = Row>(t: string, w: Row = {}) =>
    query(`SELECT * FROM ${t}${cols(w).length ? ' WHERE ' + where(w) : ''}`, vals(w)) as Promise<T[]>,

  insert: (t: string, d: Row) =>
    query(`INSERT INTO ${t} (${cols(d)}) VALUES (${cols(d).map(() => '?')})`, vals(d)),

  update: (t: string, d: Row, w: Row) =>
    query(`UPDATE ${t} SET ${cols(d).map((k) => `${k}=?`)} WHERE ${where(w)}`, [...vals(d), ...vals(w)]),

  remove: (t: string, w: Row) =>
    query(`DELETE FROM ${t} WHERE ${where(w)}`, vals(w)),
};



// Function Qeury
export async function exists<T = Row>(t: string, w: Row) {
    const row = await db.select<T>(t, w)
    if(!row.length) 
        throwError(404, `Row not found in ${t} with ${JSON.stringify(w)}`)

    return row
}