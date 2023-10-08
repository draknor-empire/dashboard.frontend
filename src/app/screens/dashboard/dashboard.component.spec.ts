import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
// import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a greeting message', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('div').textContent).toContain('This is the Dashboard!');
  });
});

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a greeting message', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('div').textContent).toContain('This is the Dashboard!');
  });
});