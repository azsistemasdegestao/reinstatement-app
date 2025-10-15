import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reinstatement-guide',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reinstatement-guide.component.html',
  styleUrls: ['./reinstatement-guide.component.css']
})
export class ReinstatementGuideComponent {
  form: FormGroup;
  submitted = signal(false);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pastDueToday: [null, [Validators.min(0)]],
      repossessionFees: [null, [Validators.min(0)]],
      nsfFees: [null, [Validators.min(0)]],
      lateFees: [null, [Validators.min(0)]],
      keyFees: [null, [Validators.min(0)]],
      salesTaxes: [null, [Validators.min(0)]],
      additionalFees: [null, [Validators.min(0)]],
      includeAdditionalFees: [false]
    });
  }

  onSubmit(): void {
    console.log('Form Value JSON:', JSON.stringify(this.form.value, null, 2));
    this.submitted.set(true);
  }
}
