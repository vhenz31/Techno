import React from 'react';
import './LandingPage.css';

export default function SignIn() {
  return (
    <div style={{minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '420px', background: '#fff', padding: 28, borderRadius: 12, boxShadow: '0 20px 40px rgba(0,0,0,0.08)'}}>
        <h2 style={{marginTop:0, marginBottom:8}}>Sign In</h2>
        <p style={{color:'#6f8b80', marginTop:0}}>Welcome back — enter your details to continue.</p>

        <form onSubmit={(e) => { e.preventDefault(); alert('Signed in (demo)'); window.location.hash = '#/'; }}>
          <label style={{display:'block', fontSize:13, color:'#3f5b52', marginTop:12}}>Email</label>
          <input type="email" required style={{width:'100%', padding:'10px 12px', marginTop:6, borderRadius:8, border:'1px solid #e6eee9'}} />

          <label style={{display:'block', fontSize:13, color:'#3f5b52', marginTop:12}}>Password</label>
          <input type="password" required style={{width:'100%', padding:'10px 12px', marginTop:6, borderRadius:8, border:'1px solid #e6eee9'}} />

          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:16}}>
            <label style={{fontSize:14}}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#/" style={{color:'#2e6a56'}}>Forgot?</a>
          </div>

          <button type="submit" className="btn create" style={{width:'100%', marginTop:18}}>Sign In</button>

          <div style={{textAlign:'center', marginTop:12, color:'#6f8b80'}}>Don't have an account? <a href="#/" style={{color:'#2e6a56'}}>Get started</a></div>
        </form>
      </div>
    </div>
  );
}
