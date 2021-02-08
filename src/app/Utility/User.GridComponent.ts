import{Input, Output, EventEmitter, Component} from '@angular/core';

@Component({
    selector:"grid-ui",
    templateUrl:"./User.Grid.html"

})

class GridComponent{
    gridColumns: Array<Object>;
    gridData: Array<Object>;

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<Object>){
        this.gridColumns=_gridColumns;
    }
    @Input("grid-data")
    set setGridData(_gridData:Array<Object>){
        this.gridData=_gridData;
    }
    @Output("grid-selected")
    eventemitter: EventEmitter<Object>;
    SelectGrid(_selected:Object){
        this.eventemitter.emit(_selected);
    }

}