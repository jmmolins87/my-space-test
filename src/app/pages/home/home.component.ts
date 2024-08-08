import { 
  AfterViewInit,
  Component, 
  ElementRef, 
  OnInit, 
  ViewChild 
} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public srcVideo: string = "assets/video/bg-home.mp4";
  public isMuted: boolean = true;

  @ViewChild('videoPlayer', { static: true }) 
  public video!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const videoElement = this.video.nativeElement;
    videoElement.play().catch(error => {
      console.error('Error playing video:', error);
    });
  }

  manageSound() {
    this.isMuted = !this.isMuted;
    this.video.nativeElement.muted = this.isMuted;
  }

}
