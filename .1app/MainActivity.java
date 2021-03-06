package {key_package_android};
import android.content.Intent;

import com.facebook.react.ReactActivity;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
     @Override
         public void onNewIntent(Intent intent) {
             super.onNewIntent(intent);
            setIntent(intent);
        }

    @Override
    protected String getMainComponentName() {
        return "project";
    }

      @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
}
