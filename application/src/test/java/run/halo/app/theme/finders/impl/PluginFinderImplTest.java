package run.halo.app.theme.finders.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.pf4j.DefaultVersionManager;
import org.pf4j.PluginDescriptor;
import org.pf4j.PluginState;
import org.pf4j.PluginWrapper;
import run.halo.app.plugin.HaloPluginManager;

/**
 * Tests for {@link PluginFinderImpl}.
 *
 * @author guqing
 * @since 2.0.0
 */
@ExtendWith(MockitoExtension.class)
class PluginFinderImplTest {
    @Mock
    private HaloPluginManager haloPluginManager;

    @InjectMocks
    private PluginFinderImpl pluginFinder;

    @Test
    void available() {
        assertThat(pluginFinder.available(null)).isFalse();

        boolean available = pluginFinder.available("fake-plugin");
        assertThat(available).isFalse();

        PluginWrapper mockPluginWrapper = Mockito.mock(PluginWrapper.class);
        when(haloPluginManager.getPlugin(eq("fake-plugin")))
            .thenReturn(mockPluginWrapper);

        when(mockPluginWrapper.getPluginState()).thenReturn(PluginState.RESOLVED);
        available = pluginFinder.available("fake-plugin");
        assertThat(available).isFalse();

        when(mockPluginWrapper.getPluginState()).thenReturn(PluginState.STARTED);
        available = pluginFinder.available("fake-plugin");
        assertThat(available).isTrue();
    }

    @Test
    void availableWithVersionTest() {
        when(haloPluginManager.getVersionManager()).thenReturn(new DefaultVersionManager());

        assertThatThrownBy(() -> pluginFinder.available("fake-plugin", null))
            .isInstanceOf(IllegalArgumentException.class);

        boolean available = pluginFinder.available("fake-plugin", "1.0.0");
        assertThat(available).isFalse();

        PluginWrapper mockPluginWrapper = Mockito.mock(PluginWrapper.class);
        when(haloPluginManager.getPlugin(eq("fake-plugin")))
            .thenReturn(mockPluginWrapper);

        when(mockPluginWrapper.getPluginState()).thenReturn(PluginState.STARTED);
        var descriptor = mock(PluginDescriptor.class);
        when(mockPluginWrapper.getDescriptor()).thenReturn(descriptor);
        when(descriptor.getVersion()).thenReturn("1.0.0");

        available = pluginFinder.available("fake-plugin", "1.0.0");
        assertThat(available).isTrue();

        available = pluginFinder.available("fake-plugin", ">=1.0.0");
        assertThat(available).isTrue();

        available = pluginFinder.available("fake-plugin", "<2.0.0");
        assertThat(available).isTrue();

        available = pluginFinder.available("fake-plugin", "2.0.0");
        assertThat(available).isFalse();

        available = pluginFinder.available("fake-plugin", "<1.0.0");
        assertThat(available).isFalse();
    }
}