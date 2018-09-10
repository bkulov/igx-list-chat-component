import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ChatComponentComponent } from './chatcomponent.component';
import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxFilterModule, IgxInputGroupModule } from 'igniteui-angular';

describe('ChatComponentComponent', () => {
  let component: ChatComponentComponent;
  let fixture: ComponentFixture<ChatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponentComponent],
      imports: [ FormsModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxFilterModule, IgxInputGroupModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
