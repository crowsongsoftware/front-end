import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageCropComponent } from './image-crop.component';

describe('CropComponent', () => {
  let component: ImageCropComponent;
  let fixture: ComponentFixture<ImageCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
