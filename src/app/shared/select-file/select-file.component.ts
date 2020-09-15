import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileData } from '../../models/file-data.model';

@Component({
  selector: 'app-select-file',
  templateUrl: './select-file.component.html',
  styleUrls: ['./select-file.component.scss']
})
export class SelectFileComponent implements OnInit {
  @ViewChild("file", null) fileElement:ElementRef;
  @Output() fileSelected: EventEmitter<FileData> = new EventEmitter();
  @Input("title") title;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onChange(event) {
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const files: FileList = target.files;

    if (!files || files.length < 1) {
      return;
    }

    const fileData = new FileData();

    fileData.name = files[0].name;
    fileData.file = files[0];

    this.fileSelected.emit(fileData);
  }

  btnClicked(event){
    this.fileElement.nativeElement.click(event);
  }

}
