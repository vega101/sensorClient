
 export interface IDataSetItem {
  label: string,
  fill: boolean,
  lineTension: number,
  backgroundColor: string,
  borderColor: string,
  borderWidth: number,
  data: Array<number>
}


 export interface IDataItem {
  date: number,
  value: number
}

export interface IDataHighLowItem {
  date: string,
  value: number
}
