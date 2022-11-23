import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './modules/auth/auth.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './modules/students/students.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { ConfigModule } from './modules/config/config.module';
import { ReportsModule } from './modules/reports/reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    StudentsModule,
    TeachersModule,
    ConfigModule,
    ReportsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }