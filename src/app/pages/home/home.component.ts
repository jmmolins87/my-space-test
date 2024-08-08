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
  public isPlay: boolean = true;

  @ViewChild('videoPlayer', { static: true }) 
  public video!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const videoElement = this.video.nativeElement;
    // Check if the video has been played before
    const hasPlayedBefore = localStorage.getItem('hasPlayedBefore') === 'true';

    videoElement.play().catch(error => {
      console.error('Error playing video:', error);
    });

    // Set initial state
    this.video.nativeElement.muted = hasPlayedBefore;
  }

  manageSound() {
    this.isMuted = !this.isMuted;
    this.video.nativeElement.muted = this.isMuted;

    // Set localStorage to indicate that the video has been played
    if (!localStorage.getItem('hasPlayedBefore')) {
      localStorage.setItem('hasPlayedBefore', 'true');
    }
  }

  manageReproduction() {
    this.isPlay = !this.isPlay;
    this.video.nativeElement.paused ? this.video.nativeElement.play() : this.video.nativeElement.pause();
  }

}
